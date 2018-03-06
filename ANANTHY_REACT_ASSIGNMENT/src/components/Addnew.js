import React, { Component } from "react";
class Addnew extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td><label htmlFor="id">ID</label></td>
                            <td><input name="id" type="number" onChange={(p) => { this.props.handleChangeInput(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="productName">Product_Name</label></td>
                            <td><input name="productName" type="text" onChange={(p) => { this.props.handleChangeInput(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="modelNumber"> Model_Number</label></td>
                            <td><input name="modelNumber" type="text" onChange={(p) => { this.props.handleChangeInput(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="price"> Price</label></td>
                            <td><input name="price" type="text" onChange={(p) => { this.props.handleChangeInput(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="InTheBox"> InsideBox</label></td>
                            <td><input name="InTheBox" type="text" onChange={(p) => { this.props.handleChangeInput(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="size"> Size</label></td>
                            <td><input name="size" type="text" onChange={(p) => { this.props.handleChangeInput(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="brand"> Brand</label></td>
                            <td><input name="brand" type="text" onChange={(p) => { this.props.handleChangeInput(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="color"> Color</label></td>
                            <td><input name="color" type="text" onChange={(p) => { this.props.handleChangeInput(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="touchScreen">TouchScreen</label></td>
                            <td><input name="touchScreen" type="text" onChange={(p) => { this.props.handleChangeInput(p) }} /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary" onClick={() => { this.props.handleAddIn(this.props.addProductIn) }}>ADD PRODUCT</button>
            </div>
        )
    }
}
export default Addnew;