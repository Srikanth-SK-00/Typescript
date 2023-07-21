"use strict";
var _emp_id;
Object.defineProperty(exports, "__esModule", { value: true });
;
class emp {
    constructor(id, nmae, addresses) {
        _emp_id.set(this, void 0);
        console.log(id, nmae, addresses);
    }
    Login() {
        throw new Error('Method not implemented.');
    }
}
_emp_id = new WeakMap();
let e = new emp(1, 'srikanth', { street: "banglore", city: "bang", pin: 123 });
