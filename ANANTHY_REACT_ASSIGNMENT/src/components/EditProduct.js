import React, { Component } from "react";
class EditProduct extends Component {
    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <td><label htmlFor="productName">Product_Name</label></td>
                            <td><input name="productName" type="text"
                                defaultValue={this.props.editProducts.productName}
                                onChange={(p) => { this.props.handleEditChanges(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="modelNumber"> Model_Number</label></td>
                            <td><input name="modelNumber" type="text"
                                defaultValue={this.props.editProducts.modelNumber}
                                onChange={(p) => { this.props.handleEditChanges(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="price"> Price</label></td>
                            <td><input name="price" type="text"
                                defaultValue={this.props.editProducts.price}
                                onChange={(p) => { this.props.handleEditChanges(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="InTheBox"> InsideBox</label></td>
                            <td><input name="InTheBox" type="text"
                                defaultValue={this.props.editProducts.InTheBox}
                                onChange={(p) => { this.props.handleEditChanges(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="size"> Size</label></td>
                            <td><input name="size" type="text"
                                defaultValue={this.props.editProducts.size}
                                onChange={(p) => { this.props.handleEditChanges(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="brand"> Brand</label></td>
                            <td><input name="brand" type="text"
                                defaultValue={this.props.editProducts.brand}
                                onChange={(p) => { this.props.handleEditChanges(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="color"> Color</label></td>
                            <td><input name="color" type="text"
                                defaultValue={this.props.editProducts.color}
                                onChange={(p) => { this.props.handleEditChanges(p) }} /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="touchScreen">TouchScreen</label></td>
                            <td><input name="touchScreen" type="text"
                                defaultValue={this.props.editProducts.touchScreen}
                                onChange={(p) => { this.props.handleEditChanges(p) }} /></td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" className="btn btn-primary" onClick={() => { this.props.handleEditClick(this.props.editProducts) }}>EDIT PRODUCT</button>
            </div>
        )
    }
}
export default EditProduct;