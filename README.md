# Laniakea-cli

A command-line interface for [Laniakea ROM Renamer](https://github.com/kieraneglin/laniakea)

## Usage

Install with

```
npm install -g laniakea-cli
```

Use with

```
Usage: laniakea-cli [options]

Options:

  -h, --help                          output usage information
  -V, --version                       output the version number
  -d, --directory                     Run in directory mode.  Cannot be used with --file.
  -f, --file                          Run in single file mode (implied). Cannot be used with --directory.
  -s, --source <file | directory>     Specify input file or directory.
  -o, --output-directory <directory>  Specify output directory.
  -t, --test-run                      Show what will be sorted without moving any files
  -n, --namespace-files               Namespace outputted files into a folder named after their console
  -r, --recurse                       Recurse into source subdirectories.  Can only be used with --directory
  -q, --quiet-console                 Will silence console output.
  ```

## TODO

Compile into Windows binary so this can be a standalone application.  I need a Windows machine or VM to do so, so this will come later.

## License

### MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
