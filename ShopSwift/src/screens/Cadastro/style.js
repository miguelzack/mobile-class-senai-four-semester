// import {StyleSheet} from "react-native";
//
// export const styles = StyleSheet.create({
//     containerHome: {
//         paddingHorizontal: 20, gap: 140
//     }, contentHome: {
//         gap: 40
//     }, containerForm: {
//         gap: 40
//     }, containerInputs: {
//         gap: 25
//     }, input: {
//         borderWidth: 1, borderColor: "#2D3133", borderRadius: 7
//     }, buttonLogin: {
//         backgroundColor: "#375EE7", borderRadius: 7
//     }, txtLogin: {
//         color: "#FFFFFF", fontWeight: "bold", textAlign: "center", paddingVertical: 15
//     }, txtNaoTemConta: {
//         textAlign: "center"
//     }, txtCriarConta: {
//         color: "#375EE7", textDecorationLine: "underline",
//     }, txtTitulo: {
//         color: "#2D3133", fontSize: 40, fontWeight: 700, width: "86%"
//     }, txtHighlights: {
//         color: "#375EE7"
//     }
// })
import styled from "styled-components";

export const Container = styled.View`
    background-color: red;
`

export const TextTitle = styled.Text`
    color: #2D3133;
    font-size: 40px;
    font-weight: 700;
    width: 86%;
`