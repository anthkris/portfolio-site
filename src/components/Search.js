import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router';
import SearchResultsPage from '../pages/Results.js';
import SearchIcon from 'react-feather/dist/icons/search';
import '../styles/search.scss';
 
// Search component
export default class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ``,
            results: [],
            redirect: false,
        }
    }

    componentDidUpdate(prevProps, prevState) {
         if (this.state.redirect !== false ) {
            this.setState(s => {
                return {
                    redirect: false
                }
            })
        }
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const query = this.state.query;
        const results = this.getSearchResults(query);
        this.setState(s => {
            return {
                results,
                query: ``,
                redirect: true
            }
        })
        event.currentTarget.reset();
    }
 
    render() {
        const redirect = this.state.redirect; 
        if( redirect ) {
            return <Redirect to={{
                            pathname: '/results',
                            state: { results: this.state.results }
                        }} />; 
        }   
        return (
            <div className="pt2 search pa3 flex justify-end-l justify-center">
                <form className="SearchBox" onSubmit={this.onSubmitHandler}>
                    <div className="Field Field--is-search">
                        <input 
                            type="search"
                            name="search"
                            placeholder="Search Posts"
                            value={this.state.query}
                            onChange={this.search}
                            className="SearchBox-query"/>

                        <button
                            type="submit"
                            className="Btn SearchBox-submitBtn dn flex-ns">Search</button>
                        </div>
                </form>
            </div>
        )
    }
 
    getSearchResults(query) {
        if (!query || !window.__LUNR__) return []
        const results = window.__LUNR__.index.search(query)
        return results.map(({ ref }) => window.__LUNR__.store[ref])
    }
 
    search = event => {
        const query = event.target.value;
        this.setState(s => {
            return {
                query
            }
        })
    }
}