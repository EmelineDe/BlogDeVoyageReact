import { useState } from "react";
import "./App.css";
import BlogForm from "./components/BlogForm";
import BlogPost from "./components/BlogPost";
import Textarea from "./components/forms/Textarea";
import Input from "./components/forms/Input";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

 const handleOnSubmit = (e) => {
  e.preventDefault()
  console.log(`Titre ${title}`)
  console.log(`Contenu ${content}`)
 }
  return (
    <div className="App">
      <BlogPost  title="Mon premier voyage" content="Voici l'histoire de mon premier voyage..."/>
      <BlogPost title="Découverte de la cuisine italienne" content="J'ai récemment exploré la cuisine italienne et voici mes pensées..." /> 
      <BlogForm onSubmit={handleOnSubmit}>
        <Input type="text" value={title} onChange={setTitle} label="Titre"/>
        <Textarea placeholder="Ajoutez votre contenu ici..." value={content} onChange={setContent}/>
      </BlogForm>
    </div>
  );
}

export default App;
