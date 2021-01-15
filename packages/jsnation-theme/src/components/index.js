import { connect } from "frontity";
import React from "react"
import Link from "./link";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({ state }) => {
    return (
      <>
        <h1>Craig Allen</h1>
        <p>Current URL: {state.router.link}</p>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/page/2">More Posts</Link>
            <Link href="contact">Contact</Link>
        </nav>
        <hr />
        <main>
            {state.source.get(state.router.link).isArchive && <List />}
            {state.source.get(state.router.link).isPostType && <Post />}
            {state.source.get(state.router.link).isPageType && <Page />}
            {state.source.get(state.router.link).is404 && <Page404 />}
        </main>
      </>
    );
  };

export default connect(Root);