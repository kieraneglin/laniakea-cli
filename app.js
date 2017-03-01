#!/usr/bin/env node

const Laniakea = require('laniakea');
const program = require('commander');
const pjson = require('./package.json');

program
  .version(pjson.version)
  .option('-d, --directory', 'Run in directory mode.  Cannot be used with --file.')
  .option('-f, --file', 'Run in single file mode (implied). Cannot be used with --directory.')
  .option('-s, --source <file | directory>', 'Specify input file or directory.')
  .option('-o, --output-directory <directory>', 'Specify output directory.')
  .option('-t, --test-run', 'Show what will be sorted without moving any files')
  .option('-n, --namespace-files', 'Namespace outputted files into a folder named after their console')
  .option('-r, --recurse', 'Recurse into source subdirectories.  Can only be used with --directory')
  .option('-q, --quiet-console', 'Will silence console output.')
  .parse(process.argv);

if (program.file && program.directory) {
  console.log('File and Directory flags are mutually exclusive. Quitting');
  return false;
}
if (program.file && program.recurse) {
  console.log('File and Recurse flags are mutually exclusive.  Did you mean to use --directory?');
  return false;
}

try {
  l = new Laniakea({
    consoleOutput: !program.quietConsole || true
  });

  if (program.directory) {
    l.renameDirectory(program.source, program.outputDirectory, {
      sortIntoFolders: program.namespaceFiles || false,
      recursive: program.recurse || false,
      dryrun: program.testRun || false
    });
  } else {
    // --file is implied
    l.renameFile(program.source, program.outputDirectory, {
      sortIntoFolders: program.namespaceFiles || false,
      dryrun: program.testRun || false
    });
  }
} catch (e) {
  console.log(e.message);
}
