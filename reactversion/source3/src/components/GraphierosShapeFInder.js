import React, { useState } from 'react';
import Linear from './graphieros/Linear';
import { a, q, w, l, lm, m, r, rm, graphieros_dictionnary } from '../libraries/graphieros_dictionnary';
import permute from '../libraries/permute';
import './css/GraphierosShapeFinder.css';
import { pairSwap, changeLoop, checkMatch } from '../libraries/pairSwap';

let memory = [];
let cutPath = [];
let codeMemory = [];
let cutCode = [];
let possibleResults = [];

const GraphierosShapeFinder = (props) => {

    const [svgGroup, setSvgGroupState] = useState({
        content: <g />
    });

    const [resultState, setResultState] = useState({
        content: ''
    });

    const [optionsState, setOptionsState] = useState({
        content: ''
    });

    const [resultCounterState, setResultCounterState] = useState({
        className: 'hidden',
        content: ''
    })


    const handleCoordinates = (props) => {

        const coordinates = [Number(props.target.cx.animVal.valueAsString), Number(props.target.cy.animVal.valueAsString)];
        codeMemory.push(coordinates);

        const X = Number(props.target.cx.animVal.valueAsString);
        const Y = Number(props.target.cy.animVal.valueAsString);
        memory.push(`${X} ${Y}`);

        let temp = memory.flat();
        let tempPath = `M ${temp}`;

        setSvgGroupState({
            content: <g>
                <path d={tempPath} />
                {cutPath.map(path => <path className="drawPath" key={path} d={path} />)}
            </g>
        })

    }

    const db = [...graphieros_dictionnary];

    const handleCut = () => {

        possibleResults = [];

        let flat = memory.flat();
        cutPath.push(`M ${flat}`);
        memory = [];

        let flatCode = codeMemory.flat();
        cutCode.push(flatCode);

        codeMemory = [];
        let reversedArray = [];
        let permutedArray = [];
        let permutedReversedArray = [];
        let shifted0 = changeLoop(cutCode[0]);
        let rs0;

        let shifted0a;
        let rs0a;
        let shifted0b;
        let rs0b;
        let shifted0c;
        let rs0c;
        let shifted0d;
        let rs0d;
        let shifted0e;
        let rs0e;
        let shifted0f;
        let rs0f;
        let shifted0g;
        let rs0g;
        let shifted0h;
        let rs0h;
        let shifted0i;
        let rs0i;
        let shifted0j;
        let rs0j;
        let shifted0k;
        let rs0k;
        let shifted0l;
        let rs0l;
        let shifted0m;
        let rs0m;
        let shifted0n;
        let rs0n;
        let shifted0o;
        let rs0o;
        let shifted0p;
        let rs0p;
        let shifted0q;
        let rs0q;
        let shifted0r;
        let rs0r;
        let shifted0s;
        let rs0s;
        let shifted0t;
        let rs0t;
        let shifted0u;
        let rs0u;
        let shifted0v;
        let rs0v;
        let shifted0w;
        let rs0w;
        let shifted0x;
        let rs0x;


        let shifted1;
        let rs1;
        let shifted1a;
        let rs1a;
        let shifted1b;
        let rs1b;
        let shifted1c;
        let rs1c;
        let shifted1d;
        let rs1d;
        let shifted1e;
        let rs1e;
        let shifted1f;
        let rs1f;
        let shifted1g;
        let rs1g;
        let shifted1h;
        let rs1h;
        let shifted1i;
        let rs1i;
        let shifted1j;
        let rs1j;
        let shifted1k;
        let rs1k;
        let shifted1l;
        let rs1l;
        let shifted1m;
        let rs1m;
        let shifted1n;
        let rs1n;
        let shifted1o;
        let rs1o;
        let shifted1p;
        let rs1p;
        let shifted1q;
        let rs1q;
        let shifted1r;
        let rs1r;
        let shifted1s;
        let rs1s;
        let shifted1t;
        let rs1t;
        let shifted1u;
        let rs1u;
        let shifted1v;
        let rs1v;
        let shifted1w;
        let rs1w;
        let shifted1x;
        let rs1x;

        let shifted2;
        let rs2;
        let shifted2a;
        let rs2a;
        let shifted2b;
        let rs2b;
        let shifted2c;
        let rs2c;
        let shifted2d;
        let rs2d;
        let shifted2e;
        let rs2e;
        let shifted2f;
        let rs2f;
        let shifted2g;
        let rs2g;
        let shifted2h;
        let rs2h;
        let shifted2i;
        let rs2i;
        let shifted2j;
        let rs2j;
        let shifted2k;
        let rs2k;
        let shifted2l;
        let rs2l;
        let shifted2m;
        let rs2m;
        let shifted2n;
        let rs2n;
        let shifted2o;
        let rs2o;
        let shifted2p;
        let rs2p;
        let shifted2q;
        let rs2q;
        let shifted2r;
        let rs2r;
        let shifted2s;
        let rs2s;
        let shifted2t;
        let rs2t;
        let shifted2u;
        let rs2u;
        let shifted2v;
        let rs2v;
        let shifted2w;
        let rs2w;
        let shifted2x;
        let rs2x;


        if (shifted0 && cutCode[0]) {
            shifted0a = changeLoop(shifted0);
            shifted0b = changeLoop(shifted0a);
            shifted0c = changeLoop(shifted0b);
            shifted0d = changeLoop(shifted0c);
            shifted0e = changeLoop(shifted0d);
            shifted0f = changeLoop(shifted0e);
            shifted0g = changeLoop(shifted0f);
            shifted0h = changeLoop(shifted0g);
            shifted0i = changeLoop(shifted0h);
            shifted0j = changeLoop(shifted0i);
            shifted0k = changeLoop(shifted0j);
            shifted0l = changeLoop(shifted0k);
            shifted0m = changeLoop(shifted0l);
            shifted0n = changeLoop(shifted0m);
            shifted0o = changeLoop(shifted0n);
            shifted0p = changeLoop(shifted0o);
            shifted0q = changeLoop(shifted0p);
            shifted0r = changeLoop(shifted0q);
            shifted0s = changeLoop(shifted0r);
            shifted0t = changeLoop(shifted0s);
            shifted0u = changeLoop(shifted0t);
            shifted0v = changeLoop(shifted0u);
            shifted0w = changeLoop(shifted0v);
            shifted0x = changeLoop(shifted0w);
            rs0 = pairSwap(shifted0);
            rs0a = pairSwap(shifted0a);
            rs0b = pairSwap(shifted0b);
            rs0c = pairSwap(shifted0c);
            rs0d = pairSwap(shifted0d);
            rs0e = pairSwap(shifted0e);
            rs0f = pairSwap(shifted0f);
            rs0g = pairSwap(shifted0g);
            rs0h = pairSwap(shifted0h);
            rs0i = pairSwap(shifted0i);
            rs0j = pairSwap(shifted0j);
            rs0k = pairSwap(shifted0k);
            rs0l = pairSwap(shifted0l);
            rs0m = pairSwap(shifted0m);
            rs0n = pairSwap(shifted0n);
            rs0o = pairSwap(shifted0o);
            rs0p = pairSwap(shifted0p);
            rs0q = pairSwap(shifted0q);
            rs0r = pairSwap(shifted0r);
            rs0s = pairSwap(shifted0s);
            rs0t = pairSwap(shifted0t);
            rs0u = pairSwap(shifted0u);
            rs0v = pairSwap(shifted0v);
            rs0w = pairSwap(shifted0w);
            rs0x = pairSwap(shifted0x);
        }

        if (shifted1 && cutCode[1]) {
            shifted1 = changeLoop(cutCode[1]);
            shifted1a = changeLoop(shifted1);
            shifted1b = changeLoop(shifted1a);
            shifted1c = changeLoop(shifted1b);
            shifted1d = changeLoop(shifted1c);
            shifted1e = changeLoop(shifted1d);
            shifted1f = changeLoop(shifted1e);
            shifted1g = changeLoop(shifted1f);
            shifted1h = changeLoop(shifted1g);
            shifted1i = changeLoop(shifted1h);
            shifted1j = changeLoop(shifted1i);
            shifted1k = changeLoop(shifted1j);
            shifted1l = changeLoop(shifted1k);
            shifted1m = changeLoop(shifted1l);
            shifted1n = changeLoop(shifted1m);
            shifted1o = changeLoop(shifted1n);
            shifted1p = changeLoop(shifted1o);
            shifted1q = changeLoop(shifted1p);
            shifted1r = changeLoop(shifted1q);
            shifted1s = changeLoop(shifted1r);
            shifted1t = changeLoop(shifted1s);
            shifted1u = changeLoop(shifted1t);
            shifted1v = changeLoop(shifted1u);
            shifted1w = changeLoop(shifted1v);
            shifted1x = changeLoop(shifted1w);
            rs1 = pairSwap(shifted1);
            rs1a = pairSwap(shifted1a);
            rs1b = pairSwap(shifted1b);
            rs1c = pairSwap(shifted1c);
            rs1d = pairSwap(shifted1d);
            rs1e = pairSwap(shifted1e);
            rs1f = pairSwap(shifted1f);
            rs1g = pairSwap(shifted1g);
            rs1h = pairSwap(shifted1h);
            rs1i = pairSwap(shifted1i);
            rs1j = pairSwap(shifted1j);
            rs1k = pairSwap(shifted1k);
            rs1l = pairSwap(shifted1l);
            rs1m = pairSwap(shifted1m);
            rs1n = pairSwap(shifted1n);
            rs1o = pairSwap(shifted1o);
            rs1p = pairSwap(shifted1p);
            rs1q = pairSwap(shifted1q);
            rs1r = pairSwap(shifted1r);
            rs1s = pairSwap(shifted1s);
            rs1t = pairSwap(shifted1t);
            rs1u = pairSwap(shifted1u);
            rs1v = pairSwap(shifted1v);
            rs1w = pairSwap(shifted1w);
            rs1x = pairSwap(shifted1x);
        }

        if (shifted2 && cutCode[2]) {
            shifted2 = changeLoop(cutCode[2]);
            shifted2a = changeLoop(shifted2);
            shifted2b = changeLoop(shifted2a);
            shifted2c = changeLoop(shifted2b);
            shifted2d = changeLoop(shifted2c);
            shifted2e = changeLoop(shifted2d);
            shifted2f = changeLoop(shifted2e);
            shifted2g = changeLoop(shifted2f);
            shifted2h = changeLoop(shifted2g);
            shifted2i = changeLoop(shifted2h);
            shifted2j = changeLoop(shifted2i);
            shifted2k = changeLoop(shifted2j);
            shifted2l = changeLoop(shifted2k);
            shifted2m = changeLoop(shifted2l);
            shifted2n = changeLoop(shifted2m);
            shifted2o = changeLoop(shifted2n);
            shifted2p = changeLoop(shifted2o);
            shifted2q = changeLoop(shifted2p);
            shifted2r = changeLoop(shifted2q);
            shifted2s = changeLoop(shifted2r);
            shifted2t = changeLoop(shifted2s);
            shifted2u = changeLoop(shifted2t);
            shifted2v = changeLoop(shifted2u);
            shifted2w = changeLoop(shifted2v);
            shifted2x = changeLoop(shifted2w);
            rs2 = pairSwap(shifted2);
            rs2a = pairSwap(shifted2a);
            rs2b = pairSwap(shifted2b);
            rs2c = pairSwap(shifted2c);
            rs2d = pairSwap(shifted2d);
            rs2e = pairSwap(shifted2e);
            rs2f = pairSwap(shifted2f);
            rs2g = pairSwap(shifted2g);
            rs2h = pairSwap(shifted2h);
            rs2i = pairSwap(shifted2i);
            rs2j = pairSwap(shifted2j);
            rs2k = pairSwap(shifted2k);
            rs2l = pairSwap(shifted2l);
            rs2m = pairSwap(shifted2m);
            rs2n = pairSwap(shifted2n);
            rs2o = pairSwap(shifted2o);
            rs2p = pairSwap(shifted2p);
            rs2q = pairSwap(shifted2q);
            rs2r = pairSwap(shifted2r);
            rs2s = pairSwap(shifted2s);
            rs2t = pairSwap(shifted2t);
            rs2u = pairSwap(shifted2u);
            rs2v = pairSwap(shifted2v);
            rs2w = pairSwap(shifted2w);
            rs2x = pairSwap(shifted2x);
        }

        for (let i = 0; i < cutCode.length; i += 1) {
            reversedArray.push(pairSwap(cutCode[i]));
        }

        permutedArray = permute(cutCode);
        permutedReversedArray = permute(reversedArray);

        const pushResult = function (origin) {
            return possibleResults.push({ n: origin.name.replace("_", ""), f: origin.fr });
        }

        const itMatches = function (searchFunction, searchedArray) {
            return searchedArray && searchFunction.includes(searchedArray.toString());
        }

        //now check if content of each array is the same as cutCode
        db.forEach(entry => {

            let thatSearch = entry.path.toString();

            //do the same with all combinations, use OR
            let itMatchesAllShifts0 = function () {
                return itMatches(thatSearch, shifted0) || itMatches(thatSearch, shifted0a) || itMatches(thatSearch, shifted0b) || itMatches(thatSearch, shifted0c) || itMatches(thatSearch, shifted0d) || itMatches(thatSearch, shifted0e) || itMatches(thatSearch, shifted0f) || itMatches(thatSearch, shifted0g) || itMatches(thatSearch, shifted0h) || itMatches(thatSearch, shifted0i) || itMatches(thatSearch, shifted0j) || itMatches(thatSearch, shifted0k) || itMatches(thatSearch, shifted0l) || itMatches(thatSearch, shifted0m) || itMatches(thatSearch, shifted0n) || itMatches(thatSearch, shifted0o) || itMatches(thatSearch, shifted0p) || itMatches(thatSearch, shifted0q) || itMatches(thatSearch, shifted0r) || itMatches(thatSearch, shifted0s) || itMatches(thatSearch, shifted0t) || itMatches(thatSearch, shifted0u) || itMatches(thatSearch, shifted0v) || itMatches(thatSearch, shifted0w) || itMatches(thatSearch, shifted0x) || itMatches(thatSearch, shifted1) || itMatches(thatSearch, shifted1a) || itMatches(thatSearch, shifted2) || itMatches(thatSearch, shifted2a) || itMatches(thatSearch, rs0) || itMatches(thatSearch, rs0a) || itMatches(thatSearch, rs0b) || itMatches(thatSearch, rs0c) || itMatches(thatSearch, rs0d) || itMatches(thatSearch, rs0e) || itMatches(thatSearch, rs0f) || itMatches(thatSearch, rs0g) || itMatches(thatSearch, rs0h) || itMatches(thatSearch, rs0i) || itMatches(thatSearch, rs0j) || itMatches(thatSearch, rs0k) || itMatches(thatSearch, rs0l) || itMatches(thatSearch, rs0m) || itMatches(thatSearch, rs0n) || itMatches(thatSearch, rs0o) || itMatches(thatSearch, rs0p) || itMatches(thatSearch, rs0q) || itMatches(thatSearch, rs0r) || itMatches(thatSearch, rs0s) || itMatches(thatSearch, rs0t) || itMatches(thatSearch, rs0u) || itMatches(thatSearch, rs0v) || itMatches(thatSearch, rs0w) || itMatches(thatSearch, rs0x)
            }

            let itMatchesAllShifts1 = function () {
                return itMatches(thatSearch, shifted1) || itMatches(thatSearch, shifted1a) || itMatches(thatSearch, shifted1b) || itMatches(thatSearch, shifted1c) || itMatches(thatSearch, shifted1d) || itMatches(thatSearch, shifted1e) || itMatches(thatSearch, shifted1f) || itMatches(thatSearch, shifted1g) || itMatches(thatSearch, shifted1h) || itMatches(thatSearch, shifted1i) || itMatches(thatSearch, shifted1j) || itMatches(thatSearch, shifted1k) || itMatches(thatSearch, shifted1l) || itMatches(thatSearch, shifted1m) || itMatches(thatSearch, shifted1n) || itMatches(thatSearch, shifted1o) || itMatches(thatSearch, shifted1p) || itMatches(thatSearch, shifted1q) || itMatches(thatSearch, shifted1r) || itMatches(thatSearch, shifted1s) || itMatches(thatSearch, shifted1t) || itMatches(thatSearch, shifted1u) || itMatches(thatSearch, shifted1v) || itMatches(thatSearch, shifted1w) || itMatches(thatSearch, shifted1x) || itMatches(thatSearch, rs1) || itMatches(thatSearch, rs1a) || itMatches(thatSearch, rs1b) || itMatches(thatSearch, rs1c) || itMatches(thatSearch, rs1d) || itMatches(thatSearch, rs1e) || itMatches(thatSearch, rs1f) || itMatches(thatSearch, rs1g) || itMatches(thatSearch, rs1h) || itMatches(thatSearch, rs1i) || itMatches(thatSearch, rs1j) || itMatches(thatSearch, rs1k) || itMatches(thatSearch, rs1l) || itMatches(thatSearch, rs1m) || itMatches(thatSearch, rs1n) || itMatches(thatSearch, rs1o) || itMatches(thatSearch, rs1p) || itMatches(thatSearch, rs1q) || itMatches(thatSearch, rs1r) || itMatches(thatSearch, rs1s) || itMatches(thatSearch, rs1t) || itMatches(thatSearch, rs1u) || itMatches(thatSearch, rs1v) || itMatches(thatSearch, rs1w) || itMatches(thatSearch, rs1x)
            }

            let itMatchesAllShifts2 = function () {
                return itMatches(thatSearch, shifted2) || itMatches(thatSearch, shifted2a) || itMatches(thatSearch, shifted2b) || itMatches(thatSearch, shifted2c) || itMatches(thatSearch, shifted2d) || itMatches(thatSearch, shifted2e) || itMatches(thatSearch, shifted2f) || itMatches(thatSearch, shifted2g) || itMatches(thatSearch, shifted2h) || itMatches(thatSearch, shifted2i) || itMatches(thatSearch, shifted2j) || itMatches(thatSearch, shifted2k) || itMatches(thatSearch, shifted2l) || itMatches(thatSearch, shifted2m) || itMatches(thatSearch, shifted2n) || itMatches(thatSearch, shifted2o) || itMatches(thatSearch, shifted2p) || itMatches(thatSearch, shifted2q) || itMatches(thatSearch, shifted2r) || itMatches(thatSearch, shifted2s) || itMatches(thatSearch, shifted2t) || itMatches(thatSearch, shifted2u) || itMatches(thatSearch, shifted2v) || itMatches(thatSearch, shifted2w) || itMatches(thatSearch, shifted2x) || itMatches(thatSearch, rs2) || itMatches(thatSearch, rs2a) || itMatches(thatSearch, rs2b) || itMatches(thatSearch, rs2c) || itMatches(thatSearch, rs2d) || itMatches(thatSearch, rs2e) || itMatches(thatSearch, rs2f) || itMatches(thatSearch, rs2g) || itMatches(thatSearch, rs2h) || itMatches(thatSearch, rs2i) || itMatches(thatSearch, rs2j) || itMatches(thatSearch, rs2k) || itMatches(thatSearch, rs2l) || itMatches(thatSearch, rs2m) || itMatches(thatSearch, rs2n) || itMatches(thatSearch, rs2o) || itMatches(thatSearch, rs2p) || itMatches(thatSearch, rs2q) || itMatches(thatSearch, rs2r) || itMatches(thatSearch, rs2s) || itMatches(thatSearch, rs2t) || itMatches(thatSearch, rs2u) || itMatches(thatSearch, rs2v) || itMatches(thatSearch, rs2w) || itMatches(thatSearch, rs2x)
            }

            if (checkMatch(cutCode[0], entry.path) === true) {
                if (cutCode[1] && checkMatch(cutCode[1], entry.path) === true) {
                    if (cutCode[2] && checkMatch(cutCode[2], entry.path) === true) {
                        possibleResults.push(entry);
                    } else {
                        possibleResults.push(entry);
                    }
                } else {
                    possibleResults.push(entry);
                }

            } if (itMatches(thatSearch, cutCode) || itMatches(thatSearch, reversedArray) || itMatches(thatSearch, permutedArray) || itMatches(thatSearch, permutedReversedArray) || itMatchesAllShifts0()) {
                if (itMatches(thatSearch, cutCode[1]) || itMatches(thatSearch, reversedArray[1]) || itMatches(thatSearch, permutedArray[1]) || itMatches(thatSearch, permutedReversedArray[1]) || itMatchesAllShifts1()) {
                    if (itMatches(thatSearch, cutCode[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, permutedReversedArray[2]) || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else {
                    pushResult(entry);
                }

            } else if (itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                if (itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                    if (itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else {
                    pushResult(entry);
                }

            } else if (itMatches(thatSearch, cutCode[0])) {
                if (itMatchesAllShifts1()) {
                    if (itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (cutCode[1] && checkMatch(cutCode[1], entry.path) === true) {
                    if (cutCode[2] && checkMatch(cutCode[2], entry.path) === true) {
                        possibleResults.push(entry);
                    } else {
                        possibleResults.push(entry);
                    }
                } else if (itMatches(thatSearch, cutCode[1])) {
                    if (itMatches(thatSearch, cutCode[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, permutedArray[2] || itMatches(thatSearch, permutedReversedArray[2]) || itMatchesAllShifts2())) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (reversedArray[1] && checkMatch(reversedArray[1], entry.path) === true) {
                    if (itMatchesAllShifts1()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, reversedArray[1])) {
                    if (itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, cutCode[2]) || itMatches(thatSearch, permutedReversedArray[2]) || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (itMatches(thatSearch, permutedArray[1])) {
                    if (itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, cutCode[2]) || itMatches(thatSearch, permutedReversedArray[2]) || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, permutedReversedArray[1])) {
                    if (itMatches(thatSearch, permutedReversedArray[2]) || itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, cutCode[2]) || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                }

            } else if (itMatches(thatSearch, reversedArray[0])) {
                if (itMatchesAllShifts1() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                    if (itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, reversedArray[1])) {
                    if (itMatches(thatSearch, reversedArray[2]) || itMatches(permutedArray[2]) || itMatches(cutCode[2]) || itMatches(permutedReversedArray[2]) || itMatchesAllShifts2() || itMatchesAllShifts0() || itMatchesAllShifts0()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (itMatches(thatSearch, permutedArray[1])) {
                    if (itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, cutCode[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, permutedReversedArray[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }

                } else if (itMatches(thatSearch, cutCode[1])) {
                    if (itMatches(thatSearch, cutCode[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, permutedReversedArray[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                }
            } else if (itMatches(thatSearch, permutedArray[0])) {
                if (itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                    pushResult(entry);
                } else if (itMatches(thatSearch, permutedArray[1])) {
                    if (itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, cutCode[2]) || itMatches(thatSearch, permutedReversedArray[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, reversedArray[1])) {
                    if (itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, cutCode[2]) || itMatches(thatSearch, permutedReversedArray[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, cutCode[1])) {
                    if (itMatches(thatSearch, cutCode[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(permutedArray[2]) || itMatches(permutedReversedArray[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                }
            } else if (itMatches(thatSearch, permutedReversedArray[0])) {
                if (itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                    pushResult(entry);
                } else if (itMatches(thatSearch, permutedReversedArray[1])) {
                    if (itMatches(thatSearch, permutedReversedArray[2]) || itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, cutCode[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, permutedArray[1])) {
                    if (itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, permutedReversedArray[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, cutCode[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, reversedArray[1])) {
                    if (itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, permutedArray[2]) || itMatches(permutedReversedArray[2]) || itMatches(cutCode[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, cutCode[1])) {
                    if (itMatches(thatSearch, cutCode[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, permutedArray[2]) || itMatches(permutedReversedArray[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                }
            } else if (itMatches(thatSearch, cutCode[1])) {
                if (itMatchesAllShifts0() ||itMatchesAllShifts1() ||itMatchesAllShifts2()) {
                    pushResult(entry);
                } else if (itMatches(thatSearch, cutCode[0])) {
                    if (itMatches(thatSearch, cutCode[2]) ||itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, permutedReversedArray[2]) || itMatchesAllShifts0() ||itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, reversedArray[0])) {
                    if (itMatches(thatSearch, reversedArray[2]) ||itMatches(thatSearch, cutCode[2]) ||itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, permutedReversedArray[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, permutedArray[0])) {
                    if (itMatches(thatSearch, permutedArray[2]) ||itMatches(thatSearch, permutedReversedArray[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, cutCode[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                } else if (itMatches(thatSearch, permutedReversedArray[0])) {
                    if (itMatches(thatSearch, permutedReversedArray[2]) ||itMatches(thatSearch, permutedArray[2]) || itMatches(thatSearch, reversedArray[2]) || itMatches(thatSearch, cutCode[2]) || itMatchesAllShifts0() || itMatchesAllShifts1() || itMatchesAllShifts2()) {
                        pushResult(entry);
                    } else {
                        pushResult(entry);
                    }
                }
            } else if (itMatchesAllShifts0()) {
                pushResult(entry);
            } else if (itMatchesAllShifts1()) {
                pushResult(entry);
            } else if (itMatchesAllShifts2()) {
                pushResult(entry);
            }

            let grammarMatters;

            if (possibleResults.length > 1) {
                grammarMatters = 'glyphes trouvés';
            } else {
                grammarMatters = 'glyphe trouvé'
            }

            setResultCounterState({
                className: 'resultCounter',
                content: `${possibleResults.length} ${grammarMatters}`
            });

        });

        setOptionsState({
            content: <div className="optionDisplay">
                {possibleResults.map((res, i) => <div key={`${res}_${i}`}>
                    <Linear className='svgRes'
                        sequence={res.n}
                        colors={[250, 254, 255]}
                        size='30'
                    />
                    <span>{res.f}</span>
                    <span className="spanPhonoOpt">[ {res.n} ]</span>
                </div>)}
            </div>
        }); 
    }


    const handleReset = () => {
        setSvgGroupState({
            content: <g />
        });
        setResultState({
            content: ''
        });
        setOptionsState({
            content: ''
        });
        setResultCounterState({
            className: 'hidden',
            content: ''
        });
        memory = [];
        cutPath = [];
        codeMemory = [];
        cutCode = [];
        possibleResults = [];
    }

    return (
        <div className={props.className}>

            <div className="svgInputWrapper">
                {props.children}
                <p className='svgInputTitle'>Cliquez sur les points, et sur <b>CUT</b> pour lever le stylo</p>
                <svg
                    viewBox='0 0 256 256'
                    className="svgInput"
                >
                    {svgGroup.content}
                    <circle className='circleInput' id='m q' cx={m} cy={q} r='30' onClick={handleCoordinates} />
                    <circle className='circleInput' id='l q' cx={l} cy={q} r='30' onClick={handleCoordinates} />
                    <circle className='circleInput' id='lm a' cx={lm} cy={a} r='30' onClick={handleCoordinates} />
                    <circle className='circleInput' id='rm a' cx={rm} cy={a} r='30' onClick={handleCoordinates} />
                    <circle className='circleInput' id='r q' cx={r} cy={q} r='30' onClick={handleCoordinates} />
                    <circle className='circleInput' id='rm w' cx={rm} cy={w} r='30' onClick={handleCoordinates} />
                    <circle className='circleInput' id='lm w' cx={lm} cy={w} r='30' onClick={handleCoordinates} />

                </svg>

                <div className='btnControls'>
                    <button className='btnCUT' onClick={handleCut}>CUT</button>
                    <button className='btnRESET' onClick={handleReset}>RESET</button>
                </div>

                <div className={resultCounterState.className}>{resultCounterState.content}</div>

                <div className="result">
                    {resultState.content}
                </div>
                <div>
                    {optionsState.content}
                </div>
            </div>

        </div>
    )
}

export default GraphierosShapeFinder;