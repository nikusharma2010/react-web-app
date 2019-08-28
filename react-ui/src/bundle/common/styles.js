import styled from 'styled-components';

export const Container = styled.div`
    // padding-right: 15px;
    // padding-left: 15px;
    /* width: 100%; */
    margin-right: -8px;
    margin-left: -8px;
    // @media (min-width: 280px) {
    //     max-width: 320px;
    // } 
    // @media (min-width: 576px) {
    //     max-width: 540px;
    // }
    
    // @media (min-width: 768px) {
    //     max-width: 720px;
    // }
    
    // @media (min-width: 992px) {
    //     max-width: 960px;
    // }
    
    // @media (min-width: 1200px) {
    //     max-width: 1140px;
    // }
    `;
export const CardBody = styled.div`
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    `;

export const Col = styled.div`
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    text-align: ${props => props.textAlign};
    //margin: auto;
    `;
export const Row = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    // margin-right: -15px;
    // margin-left: -15px;
    // margin-bottom: 5px;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    //padding: 5px;
    border-bottom: ${props => !props.bottomBorder ? " " : "1px solid"};
    `;
export const RowShadow = styled(Row)`
    background-color: #99ddff;
    border-radius: .20em;
    box-shadow: 5px 5px 5px #aaaaaa;
    `;
export const NameLabel = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 30px;
    color: #fff;
    line-height: 50px;
    text-align: center;
    background: #4a4963;
    padding: 10px;
    `;
export const Button = styled.div`
    display: inline-block;
    background-color: #012d65;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:3px;
    border-radius: 0.25rem;
    -webkit-transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
    `;

export const ButtonPrimary = styled(Button)`
    background-color: #286090;
    `;
export const ButtonSuccess = styled(Button)`
    background-color: #5cb85c;
    `;
export const ButtonInfo = styled(Button)`
    background-color: #5bc0de;
    `;
export const ButtonDanger = styled.button`
    background-color: #d9534f;
    display: inline-block;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:3px;
    border-radius: 0.25rem;
    -webkit-transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
 
    `;
export const FormDiv = styled.div`
    opacity: 1;
    display: block;
    display: block;
    width: 100%;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
    line-height: 1.5;
    background-color: #ebf1f7;
    `;
export const SubmitButton = styled.button`
    display: inline-block;
    background-color: #012d65;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    margin:3px;
    border-radius: 0.25rem;
    -webkit-transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
    `;
export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    background: #d8d5d0;
    border: none;
    border-radius: 3px;
    width: 70%;
`;

export const Alert = styled.div`
    border-radius: 0.25rem;
    width: 100%;
    padding: 20px;
    background-color: #5bc0de
`;