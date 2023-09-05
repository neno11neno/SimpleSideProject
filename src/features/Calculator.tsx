import CalcButton from "../core/components/shared/CalcButton";
import Result from "../core/components/shared/Result";
import React, { useReducer, FC } from 'react';

interface CalcState {
    calcProgress: string;
}

type ActionType =
    | '+'
    | '-'
    | '*'
    | '/'
    | '='
    | '.'
    | 'c'
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9;

const INITIAL_STATE: CalcState = { calcProgress: '0' };

const Calculator: FC = () => {
    const [calcResult, dispatch] = useReducer(reducer, INITIAL_STATE);

  function reducer(state: CalcState, action: ActionType): CalcState {
    const lastAlphabet = state.calcProgress[state.calcProgress.length - 1];

    switch (action) {
        case '+':
        case '-':
        case '*':
        case '/':
            // 处理运算符的情况，例如将运算符追加到当前表达式中
            if (lastAlphabet === '+' || lastAlphabet === '-' || lastAlphabet === '*' || lastAlphabet === '/') {
                // 如果最后一个字符已经是运算符了，不做任何操作
                return state;
            } else {
                return { calcProgress: state.calcProgress + action };
            }
        case '=':
            // 处理等号的情况，计算表达式的结果
            try {
                // eslint-disable-next-line no-eval
                const result = eval(state.calcProgress);
                return { calcProgress: result.toString() };
            } catch (error) {
                // 处理计算错误的情况
                return { calcProgress: 'Error' };
            }
        case '.':
            // 不能出现连续的小数点
            if (lastAlphabet === '.') {
                return state;
            } else {
                return { calcProgress: state.calcProgress + '.' };
            }
        case 'c':
            // 重置表达式
            return { calcProgress: '0' };
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return keyNumber(state.calcProgress, action.toString());
        default:
            throw new Error('some error happened');
    }
}

    function keyNumber(currentStr: string, targetNumString: string): CalcState {
        // 如果首位是0且只有0 則按下的數值取代首位
        // 如果首位非零且不只一位 則在currentStr後增加'0'(string)
        let returnNumStr = '';
        if (currentStr === '0') {
            returnNumStr = targetNumString;
        } else {
            returnNumStr = currentStr.concat(targetNumString);
        }
        return { calcProgress: returnNumStr };
    }

    return (
        <div className="calculator-wrap">
            <Result content={calcResult.calcProgress} />
            <div className="d-flex btn-wrap">
                <CalcButton
                    action="c"
                    onClick={() => {
                        dispatch('c');
                    }}
                />
            </div>
            <div className="d-flex btn-wrap">
                <CalcButton
                    action="7"
                    onClick={() => {
                        dispatch(7);
                    }}
                />
                <CalcButton
                    action="8"
                    onClick={() => {
                        dispatch(8);
                    }}
                />
                <CalcButton
                    action="9"
                    onClick={() => {
                        dispatch(9);
                    }}
                />
                <CalcButton
                    action="/"
                    onClick={() => {
                        dispatch('/');
                    }}
                />
            </div>
            <div className="d-flex btn-wrap">
                <CalcButton
                    action="4"
                    onClick={() => {
                        dispatch(4);
                    }}
                />
                <CalcButton
                    action="5"
                    onClick={() => {
                        dispatch(5);
                    }}
                />
                <CalcButton
                    action="6"
                    onClick={() => {
                        dispatch(6);
                    }}
                />
                <CalcButton
                    action="*"
                    onClick={() => {
                        dispatch('*');
                    }}
                />
            </div>
            <div className="d-flex btn-wrap">
                <CalcButton
                    action="1"
                    onClick={() => {
                        dispatch(1);
                    }}
                />
                <CalcButton
                    action="2"
                    onClick={() => {
                        dispatch(2);
                    }}
                />
                <CalcButton
                    action="3"
                    onClick={() => {
                        dispatch(3);
                    }}
                />

                <CalcButton
                    action="-"
                    onClick={() => {
                        dispatch('-');
                    }}
                />
            </div>
            <div className="d-flex btn-wrap">
                <CalcButton onClick={() => {
                        dispatch(0);
                    }} action="0" />
                <CalcButton
                    action="."
                    onClick={() => {
                        dispatch('.');
                    }}
                />
                <CalcButton
                    action="="
                    onClick={() => {
                        dispatch('=');
                    }}
                />
                <CalcButton
                    action="+"
                    onClick={() => {
                        dispatch('+');
                    }}
                />
            </div>
        </div>
    );
};

export default Calculator;  