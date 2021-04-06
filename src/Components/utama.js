import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import TentangSaya from './tentangsaya';
import Karya from './karya';
import Kontak from './kontak';
import Bagus from './bagus';
import Kurang from './kurang';
import List from './List';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route exact path="/tentangsaya" component={TentangSaya}/>
        <Route exact path="/karya" component={Karya}/>
        <Route exact path="/kontak" component={Kontak}/>
        <Route exact path="/bagus" component={Bagus}/>
        <Route exact path="/kurang" component={Kurang}/>
        <Route path="/list" component={List} />
    </Switch>
)

export default Utama;
