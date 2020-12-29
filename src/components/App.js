import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
    state = { images: [] };
    onSearchSubmit = async (term) => {
        try {
            const response = await unsplash.get("/search/photos", {
                params: { query: term, per_page: 40, page: 2 },
            });
            console.log(response);
            this.setState({ images: response.data.results });
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;
