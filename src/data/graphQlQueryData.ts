import {OptionInterface} from "../store/type/options";
import axios, {AxiosHeaders} from 'axios';


const URL = "http://localhost:5000/graphql";

const HEADERS = new AxiosHeaders({
    'Access-Control-Allow-Origin': 'localhost:3001',
    'Access-Control-Allow-Methods': "GET, POST",
    'Content-Type': 'application/json',
    // 'Connection': 'keep-alive',
    // 'Accept-Encoding': 'gzip, deflate, br',
});

const graphQlPictureQuery = ({width, option1, option2}: OptionInterface) => {
    if (!option1) {
        return `{image(createImageInput:{ width: "${width}"}){ fileName }}`;
    }

    if (!option2) {
        return `{image(createImageInput:{ width: "${width}", option1: "${option1}"}){ fileName }}`;
    }

    return `{
        image(createImageInput: { 
            width: "${width}",
            option1: "${option1}", 
            option2: "${option2}"} ){fileName} }`;
};

const graphQlPictureBody = (graphQlQuery: string) =>
    JSON.stringify({
        query: graphQlQuery,
        "operationName":null,
        "variables":{},
    });

export {
  URL,
  HEADERS,
  graphQlPictureBody,
  graphQlPictureQuery,
};