import styled from 'styled-components';

export const StyleDiv = styled.div`
    max-width: 600px;
    min-height: 400px;
    margin: 0 auto;
    margin-top: 30px;
    background-color: #fff;
    border-radius: 20px;
    padding: 40px 100px 100px 100px;
    box-sizing: border-box;
    font-size: 1.1rem;
    color: #3a3939;
    box-shadow: 0px 2px 2.5px silver;

    display: flex;
    flex-direction: column;
    align-items: center; 

    h1 { 
        font-weight: 700;
        color: #2CB8E3;
        margin-bottom: 1.8rem;
    }
    p {
        color: red;
        text-align: right;
        font-size: 0.6rem;
    }
    form {
        max-width:300px;
        display: flex;
        flex-direction: column;
    }
    label { 
        font-weight: 80;
    }
    input { 
        max-width: 250px;
        margin: 0 auto;
        margin-left: 10px;
        height: 1.4rem;
        border: 2px solid #E0E4E8; 
        background-color: transparent;
        margin-bottom: 9px;
    }
    input:focus { outline: none; }

    input[type="checkbox"] {
        justify-content: center;
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }
    a {
        margin-top: 7px;
        font-size: 0.3rem;
        text-decoration: none;
    }
    li {
        display: flex;
        max-width: 400px;
        margin-bottom: 0.8rem;
        font-size: 14px;
        text-align: left;
    }
`;

export const Btn = styled.button`
	width: ${(props) => props.width || "36px"};
	height: ${(props) => props.height || "1.6rem"};
    margin-left: 7px;
	box-sizing: border-box;
	border: ${(props) => props.primary? "1px solid #2CB8E3" : "1px solid #E0E4E8" };
	border-radius: 3px;
    cursor: pointer;
	font-weight: 500;
	font-size: 12px;
	line-height: 12px;
	//text-align: center;
	letter-spacing: -1px;

	color: ${(props) => props.primary? "#fff" : "#575A62"};
	background: ${(props) => props.primary? "#4CD9EF" : "#fff"};
    
    &:disabled {
        cursor: default;
        opacity: 0.5;
        background: var(--button-bg-color, #025ce2);
    }
`;