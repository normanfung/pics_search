import React from "react";

class SearchBar extends React.Component {
    state = { term: "" };

    onFormSubmit(e) {
        e.preventDefault(e);
        this.props.onSearchSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form
                    onSubmit={this.onFormSubmit.bind(this)}
                    className="ui form"
                >
                    <div className="ui icon fluid input">
                        <input
                            type="text"
                            placeholder="Image Search"
                            value={this.state.term}
                            onChange={(e) =>
                                this.setState({ term: e.target.value })
                            }
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
