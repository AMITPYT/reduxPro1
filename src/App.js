import PostsList from "./components/features/posts/PostsList";
import AddPostForm from "./components/features/posts/AddPostForm";

function App() {
  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
