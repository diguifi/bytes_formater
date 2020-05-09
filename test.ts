import { assertEquals } from "https://deno.land/std@v1.0.0-rc1/testing/asserts.ts";
import { format, setColorEnabled } from "./mod.ts";

setColorEnabled(false);

Deno.test("test1", function test1() {
    const bytes = new Uint8Array([
        10, 53, 46, 54, 46, 51, 52, 0, 71, 241, 0, 59, 77, 99, 52, 49, 65, 107,
        77, 69, 0, 223, 247, 45, 2, 0, 111, 0, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        54, 55, 82, 85, 121, 100, 65, 41, 47, 99, 80, 41, 0, 109, 121, 115, 113,
        108, 95, 110, 97, 116, 105, 118, 101, 95, 112, 97, 115, 115, 119, 111, 114,
        100, 0
    ]);

    const output = `+-------------------------------------------------+
         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |
+--------+-------------------------------------------------+----------------+
|00000000| 0a 35 2e 36 2e 33 34 00 47 f1 00 3b 4d 63 34 31 |.5.6.34.G..;Mc41|
|00000010| 41 6b 4d 45 00 df f7 2d 02 00 6f 00 15 00 00 00 |AkME...-..o.....|
|00000020| 00 00 00 00 00 00 00 36 37 52 55 79 64 41 29 2f |.......67RUydA)/|
|00000030| 63 50 29 00 6d 79 73 71 6c 5f 6e 61 74 69 76 65 |cP).mysql_native|
|00000040| 5f 70 61 73 73 77 6f 72 64 00                   |_password.      |
+--------+-------------------------------------------------+----------------+`;

    assertEquals(output, format(bytes).trim());
});

Deno.test("test2", function test2() {
    const bytes = new Uint32Array([4560045, 11454564, 4422222]);
    const output = `+-------------------------------------------------+
         |  0  1  2  3  4  5  6  7  8  9  a  b  c  d  e  f |
+--------+-------------------------------------------------+----------------+
|00000000| ad 94 45 00 64 c8 ae 00 4e 7a 43 00             |..E.d...NzC.    |
+--------+-------------------------------------------------+----------------+`;
    assertEquals(output, format(bytes).trim());
});
