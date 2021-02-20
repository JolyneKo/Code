import Tag from './Tag';
import image1 from '../images/image1.jpg';


function Main() {
  return (
    <main className="Main">
      <article className="artigo">
        <h1 class="cabeçalho">O que é Lorem?</h1>
        <p class="paragrafo">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sequi aliquam odio inventore blanditiis tempora dicta perspiciatis, tempore dolore optio doloremque maxime reiciendis temporibus laboriosam eveniet magnam! Modi perferendis facilis cupiditate omnis atque iure voluptatem neque odio commodi dolorem, doloribus inventore, asperiores autem repellendus! Modi maiores fuga error rerum voluptates?</p>
        <img src={image1} alt="Anime girl" id="image1"/>
        <p className="paragrafo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, ab eum nulla et accusamus facere odio animi cumque fugit vero dignissimos cum minus praesentium sed nesciunt tenetur laudantium amet ullam ea qui esse assumenda? Officia, repudiandae? Molestias possimus harum ab ipsum quisquam perferendis nemo expedita distinctio neque. Vitae sed quis quibusdam tempore et tenetur sequi recusandae illo quo, fuga a minima illum odit, id repellat excepturi asperiores dignissimos pariatur adipisci. Maxime voluptates quisquam eveniet, ipsum optio nostrum repellendus possimus autem nobis vero, quis doloremque. Eligendi ipsa laboriosam ex cumque placeat vel reiciendis distinctio soluta quasi aliquam et, nostrum repellat excepturi.</p>
      </article>

      <aside className="relacionados">
        <h2>O que é HTML?</h2>
        <div className="tags">
          <Tag color="orange" text="HTML"/>
          <Tag color="hotpink" text="Tutorial"/>
        </div>
      </aside>

      <aside className="relacionados">
        <h2>O que é CSS?</h2>
        <div className="tags">
          <Tag color="dodgerblue" text="CSS"/>
          <Tag color="hotpink" text="Tutorial"/>
        </div>
      </aside>

      <aside className="relacionados">
        <h2>O que é Javascript?</h2>
        <div className="tags">
          <Tag color="yellow" text="Javascript"/>
          <Tag color="hotpink" text="Tutorial"/>
        </div>
      </aside>

      <aside className="relacionados">
        <h2>O que é React?</h2>
        <div className="tags">
          <Tag color="deepskyblue" text="React.js"/>
          <Tag color="hotpink" text="Tutorial"/>
          <Tag color="yellow" text="Javascript"/>
        </div>
      </aside>
    </main>
  )
}

export default Main
