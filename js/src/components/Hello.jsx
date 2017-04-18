class Hello extends React.Component {
    state = {
        input1: "",
        input2: ""
    }
    handleChange = (name, e) =>{
        var change = {};
        change[name] = e.target.value;
        this.setState(change);
    }
    render() {
        return (
            <div>
                Hello: {this.props.name}
                <br />
                <input
                    type="text"
                    value={this.state.input1}
                    onChange={this.handleChange.bind(this, "input1")}
                />
                <br />
                <input
                    type="text"
                    value={this.state.input2}
                    onChange={this.handleChange.bind(this, "input2")}
                />
                <br />
                Nice: {this.state.input1} {this.state.input2}
            </div>
        );
    }
}
