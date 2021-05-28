function parser(str) {
    stringArr = str.split(',')
    return stringArr;
}

console.log(parser('DEVICE,PKG_GRP,TECH,ALIAS,MBD,LF,CAP_BOND1,MOLD_CHASE,WIRE,BP_BOND1_1,BP_BOND1_2,WIRE_SIZE_BOND1,WIRE_TYPE_BOND1,BOND_PAD_BOND1,BP_BOND2_1,WIRE_SIZE_BOND2,WIRE_TYPE_BOND2,BOND_PAD_BOND2').length);


class DeviceConstructor{
    constructor(device,
                pkg_grp, 
                tech, 
                alias, 
                mbd, 
                lf, 
                cap_bond1, 
                mold_chase, 
                wire, 
                bp_bond1_1, 
                bp_bond1_2, 
                wire_size_bond1,
                wire_type_bond1,
                bond_pad_bond1, 
                bp_bond2_1, 
                wire_size_bond2,
                wire_type_bond2,
                bond_pad_bond2) {
        this._device = device;
        this._pkg_grp = pkg_grp;
        this._tech = tech;
        this._alias = alias;
        this._mbd = mbd;
        this._lf = lf;
        this._cap_bond1 = cap_bond1;
        this._mold_chase = mold_chase;
        this._wire = wire;
        this._bp_bond1_1 = bp_bond1_1;
        this._bp_bond1_2 = bp_bond1_2;
        this._wire_size_bond1 = wire_size_bond1;
        this._wire_type_bond1 = wire_type_bond1;
        this._bond_pad_bond1 = bond_pad_bond1;
        this._bp_bond2_1 = bp_bond2_1;
        this._wire_size_bond2 = wire_size_bond2;
        this._wire_type_bond2 = wire_type_bond2;
        this._bond_pad_bond2 = bond_pad_bond2;
    }
}

//  const sample = new DeviceConstructor('PS61088RHLT-G2','4.5X3.5-300ST');
