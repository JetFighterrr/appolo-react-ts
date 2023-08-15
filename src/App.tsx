import React from 'react';
import './App.css';
import {Selector} from "./components/Selector";
import {SelectorPanel} from "./components/SelectorPanel";
import {useDispatch} from "react-redux";
import {updateWidth, updateOption2, updateOption1, requestUpdateImage} from './store/actions';
import {useTypeSelector} from './hooks/useTypeSelectors';
import { widthOptions, options1, options2,} from './data/selector-data';
import {Picture} from "./components/Picture";

const App = () => {

    const dispatch = useDispatch();
    const {width, option1, option2} = useTypeSelector(state => state.options);
    const {pictureFileName} = useTypeSelector(state => state.picture);

    const setWidth = (newValue: string) => {
        dispatch(updateWidth(newValue));
    };
    const setOption1 = (newValue: string) => {
        dispatch(updateOption1(newValue));
    };
    const setOption2 = (newValue: string) => {
        dispatch(updateOption2(newValue));
    };
    const getPicture = () => {
        console.log('button clicked');
        dispatch(requestUpdateImage({width, option1, option2}));
    }

  return (
    <div className="App">
        <SelectorPanel>
            <Selector
                options = {widthOptions}
                value = {width}
                selectName = "Width"
                onChange = {setWidth}
            />
            <Selector
                options = {options1}
                value = {option1}
                selectName = "Height"
                onChange = {setOption1}
            />
            <Selector
                options = {options2}
                value = {option2}
                selectName = "Young/Grayscale"
                onChange = {setOption2}
            />
            <button
                className="get-data"
                title={width ? 'Click to see Keanu!'  : 'Width is required'}
                onClick={() => getPicture()} disabled={!width}>
                    Get picture
            </button>
        </SelectorPanel>
        <Picture pictureFileName={pictureFileName}/>
    </div>
  );
}

export {App};
