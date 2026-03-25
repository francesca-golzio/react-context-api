import ourCrew from '../data/ourCrew'

function About() {


  return (
    <>

      <main className='about_main_content'>

        <div className="container meet_crew">
          <h2 className='py-2'>Meet our crew!</h2>
          <div className="row members_deck g-5 py-2">
            {ourCrew.map((member) => {

              return (
                <div className="col-12 col-md-6" key={member.id}> {/* ⚠️ responsive da sistemare */}
                  <div className="card crew-card">

                    <div className="card-header">

                      <h3 className="card-title">{member.name}</h3>

                      <div className='d-flex'>

                        <div className='profile_titles'>
                          <div className="card-text profile_title">{member.title}</div>
                          <p className="card-text profile_role fst-italic"><small><br />{member.role}</small></p>
                        </div>

                        <p className="card-text profile_vibe">{member.vibe}</p>

                      </div>

                      <img src={member.image} className="card-img-top" alt={member.name} />

                    </div>

                    <div className="card-body member-bio-info">
                      <p className="card-text profile_bio">{member.bio}</p>
                      <span className="card-text profile_fun">{member.funFact}</span>
                    </div>

                  </div>
                </div>


              )
            })}
          </div>
        </div>

        <div className="container-fluid we_are">
          <div className="container">
            <div className='py-2'>
              <h2>The Tail End of the Story</h2>
              <p>
                We aren't your average retail team. We're a collective of young mermaids who got tired of seeing the same old "shore-side" junk washing up in our lagoons. We decided that if the humans weren't going to provide high-quality, ethically sourced goods, we'd just have to surface and do it ourselves.

                Think of us as your underwater personal shoppers—minus the soggy packaging and with a much better sense of flow.
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid ethics">
          <div className="container py-2">
            <h2>Our "No-Fin-Ky" Ethics</h2>
            <p>
              We're pretty protective of our playground (the ocean, in case you missed the memo). That's why our ethics aren't just a marketing ploy; they're a lifestyle.
            </p>
            <ul>
              <li>
                <span>Sustainably Sourced:</span> If it harms the habitat, it's a hard pass. We vet every supplier to ensure they aren't being shellfish with the planet's resources.
              </li>
              <li>
                <span>Zero-Waste Waves:</span> We aim for minimal packaging. If we could ship things in bubble-wrapped seaweed, we probably would, but for now, we stick to recycled, compostable materials.
              </li>
              <li>
                <span>Fair Treasure:</span> Everyone in our supply chain gets a fair share of the "doubloons." No exploitative labor—human or otherwise.
              </li>
              <li>
                <span>Cruelty-Free:</span> Tested on us, never on our fishy friends.
              </li>
            </ul>
          </div>
        </div>

      </main >

    </>
  )
}

export default About
