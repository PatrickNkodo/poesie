import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { useGlobalContext } from '../context';
function Mainnav() {
	const { helpFxn, aboutFxn, homeFxn, tab, poem, choice, getPoem, changePoem,capture,download} = useGlobalContext();
	return (
		<header>
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<a className="navbar-brand" href="#">
					<img src={logo} alt="Avatar Logo" width="100px" className="p-0" />
				</a>
				{choice && (
					<div className="navbar-nav choice-fxns">
						<li className="nav-item select">
							<span className={`nav-link`} onClick={getPoem}>
								Selectionner
							</span>
						</li>
					</div>
				)}
				<div className="">
                {poem && (
					<div className="navbar-nav poem-fxns">
						<li className="nav-item poem-fxn1">
							<span className={`nav-link`} onClick={changePoem}>
								Changer le poème
							</span>
						</li>
						<li className="nav-item poem-fxn2" data-bs-toggle="modal" data-bs-target="#myModal">
							<span className={`nav-link`} onClick={capture}>
								Sauvegarder l'image
							</span>
						</li>

<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body bg-dark d-flex justify-content-center">
      </div>

      <div class="modal-footer">
        {/* <a href='#canvas' className="btn btn-success" download='poem.png'>Download</a> */}
        <button onClick={download} className="btn btn-success">Download</button>
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>
					</div>
				)}
                </div>
				<div className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
					<span className="navbar-toggler-icon" />
				</div>
				<div id="nav" className="collapse navbar-collapse">
					<ul className="navbar-nav">
						<li className="nav-item">
							<span className={`nav-link ${tab == 'Accueil' && 'bordered'}`} onClick={homeFxn}>
								Accueil
							</span>
						</li>
						<li className="nav-item">
							<span className={`nav-link ${tab == 'Aide' && 'bordered'}`} onClick={helpFxn}>
								Aide
							</span>
						</li>
						<li className="nav-item">
							<span className={`nav-link ${tab == 'A propos de moi' && 'bordered'}`} onClick={aboutFxn}>
								A propos de moi
							</span>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}
export default Mainnav;
