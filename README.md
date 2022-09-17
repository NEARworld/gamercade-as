# AS(AssemblyScript) Bindings & Example Project

For [Gamercade](https://gamercade.io) and the [Gamercade Console](https://github.com/gamercade-io/gamercade_console).

## AS Bindings for Gamercade

Bindings are located at `/gamercade`.

Import the bindings into your project with `import * as gc from "../gamercade/gamercade-raw";`.

You can use the `raw` api. like `gc.set_pixel(0, 10, 10)`.

## Building the Example project

Build the project with `npm run asbuild`.

The file will be output at `build/release.wasm`.

Then, follow the [guide on bundling](https://github.com/gamercade-io/gamercade_console/#bundling-a-game-with-the-editor---how-to-create-a-gcrom-file) a game with the editor.

## AS Version

This was built and is compatible with **AssemblyScript ^0.21.3**.

## License

Licensed under either of

- Apache License, Version 2.0 ([LICENSE-APACHE](LICENSE-APACHE) or https://www.apache.org/licenses/LICENSE-2.0)
- MIT license ([LICENSE-MIT](LICENSE-MIT) or https://opensource.org/licenses/MIT)

at your option.

#### Contribution

Unless you explicitly state otherwise, any contribution intentionally submitted
for inclusion in the work by you, as defined in the Apache-2.0 license, shall be
dual licensed as above, without any additional terms or conditions.
