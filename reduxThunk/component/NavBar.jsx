import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CompletedTodos from "./CompletedTodos";
import UncompletedTodos from "./UncompletedTodos";
import TodoList from "./TodoList";
import Users from "./Users";
import User from "./User";
import Memo from "./Memo";
import Topics from "./Topics";

const pages = [
  { name: "useMemo", path: "/usememo" },
  { name: "completed", path: "/completed" },
  { name: "uncompleted", path: "/uncompleted" },
  { name: "users", path: "/users" },
  { name: "topics", path: "/topics" },
];
export default function NavBar() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            {pages.map((page) => {
              return (
                <li key={page.path}>
                  <Link to={page.path}>{page.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* <nav style={{padding:'10px', background: '#eee'}}>
      <Link to='/home' style={{ marginRight: '10px'}}> Home</Link>
      <Link to='/completed' style={{ marginRight: '10px'}}> Completed</Link>
      <Link to='/uncompleted'> Uncompleted</Link> </nav> */}

        <Switch>
          {/* <Routes>  */}
          <Route path="/usememo" exact>
            <Memo />
          </Route>
          <Route path="/completed" exact>
            <CompletedTodos />
          </Route>
          <Route path="/uncompleted" exact>
            <UncompletedTodos />
          </Route>
          <Route path="/" exact>
            <TodoList />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Route path="/users/:id">
              <User />
            </Route>
            <Route path="/topics" exact>
            <Topics />
            </Route>
        </Switch>
        {/* </Routes> */}
      </div>
    </BrowserRouter>
  );
}
