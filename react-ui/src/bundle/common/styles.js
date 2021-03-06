import styled from 'styled-components';

export const Container = styled.div`
    /* width: 100%; */
    margin-right: -5px;
    margin-left: -5px;
    `;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: ${props => props.col ? props.col : 1};
    width: 100%;
    text-align: ${props => props.textAlign};
    `;
export const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100%;
    align-items:center;
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
    font-weight: 500;
    color: #ffffff;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    background-color: #286090;
    text-align: center;
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
export const ButtonDanger = styled(Button)`
    background-color: #d9534f;
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
    background-color: #012d65;
    display: inline-block;
    font-weight: 500;
    color: #ffffff;
    border: 1px solid transparent;
    padding: 10px 10px;
    line-height: 1.5;
    border-radius: 0.25rem;
    text-align: center;
    `;
export const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    background: #bdbdbd;
    border: none;
    border-radius: 3px;
    width: auto;
    height: 25px;
`;

export const Alert = styled.div`
    border-radius: 0.25rem;
    width: 100%;
    padding: 20px;
    background-color: #5bc0de;
`;