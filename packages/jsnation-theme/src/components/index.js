import { connect, Global, css, styled, Head } from "frontity";
import React from "react"
import Link from "./link";
import List from "./list";
import Post from "./post";
import Page from "./page";

const Root = ({ state, actions }) => {
    return (
      <>
        <Global
          styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
            html {
              font-family: sans-serif;
            }

          `}
        />
        <Head>
          <title>Craig Allen - Front-end Web Developer</title>
          <meta name="description" content="This is the description"></meta> 
        </Head>
        <Header isPostType={state.source.get(state.router.link).isPostType}>
          <HeaderContent>
            <h1>Craig Allen</h1>
            <p>Current URL: {state.router.link}</p>
            { state.theme.isMenuOpen ? (
              <>
                <button onClick={actions.theme.closeMenu}>Close Menu</button>
                <Menu>
                  <Link href="/">Home</Link>
                  <Link href="/page/2">More Posts</Link>
                  <Link href="/contact">Contact</Link>
                </Menu>
              </>
            ) : (
                <button onClick={actions.theme.openMenu}>Open Menu</button>
            )}

          </HeaderContent>
        </Header>
        <Main>
            {state.source.get(state.router.link).isArchive && <List />}         
            {state.source.get(state.router.link).isPostType && <Post />}
            {state.source.get(state.router.link).isPageType && <Page />}
            {state.source.get(state.router.link).is404 && <Page404 />}
        </Main>
      </>
    );
  };

export default connect(Root);

const Header = styled.header`
  background-color: #eee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? 'lightseagreen' : 'maroon' };
`
const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`
const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  & > div {
    margin-right: 1em;
  }
`
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;

  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
`