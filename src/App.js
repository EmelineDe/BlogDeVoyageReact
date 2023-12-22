import "./App.css";
import RoutesComponent from "./components/Routes";

function App() {
 
  return (
    <div className="App">
      <RoutesComponent/>
    </div>
  );
}

export default App;

/** const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

 const handleOnSubmit = (e) => {
  e.preventDefault()
  console.log(`Titre ${title}`)
  console.log(`Contenu ${content}`)
 } */
/**<BlogPost  title="Mon premier voyage" content="Voici l'histoire de mon premier voyage..."/>
      <BlogPost title="Découverte de la cuisine italienne" content="J'ai récemment exploré la cuisine italienne et voici mes pensées..." /> 
      <BlogForm onSubmit={handleOnSubmit}>
        <Input type="text" value={title} onChange={setTitle} label="Titre"/>
        <Textarea placeholder="Ajoutez votre contenu ici..." value={content} onChange={setContent}/>
      </BlogForm>**/