import { Link } from 'react-router-dom';
import logo from '../logo.png';
import { useGlobalContext } from '../context';
import Command from './Command';
function Mainnav() {
	const { helpFxn, aboutFxn, homeFxn, tab, poem, choice, getPoem, changePoem,capture,download,write,commandFxn,openForm} = useGlobalContext();
	return (
		<header>
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<a className="navbar-brand" href="#">
					<img src={logo} alt="Avatar Logo" width="100px" className="p-0" />
				</a>
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
						<li className="nav-item">
							<span className={`nav-link ${tab == 'Commander' && 'bordered'}`} onClick={commandFxn}>
								Commander
							</span>
						</li>
					</ul>
				</div>
				
				{(choice || write) && (
					<div className="navbar-nav choice-fxns">
						<li className="nav-item select">
							<span className={`nav-link`} onClick={openForm}>
								<i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Catégories
							</span>
						</li>
						<li className="nav-item select">
							<span className={`nav-link`} onClick={getPoem}>
								<i className="fa fa-check-circle" aria-hidden="true"></i> Appliquer
							</span>
						</li>
					</div>
				)}
				<div className="">
                {poem && (
					<div className="navbar-nav poem-fxns">
						<li className="nav-item poem-fxn1">
							<span className={`nav-link`} onClick={changePoem}>
								Re-modifier
							</span>
						</li>
						<li className="nav-item poem-fxn2" data-bs-toggle="modal" data-bs-target="#myModal">
							<span className={`nav-link`} onClick={capture}>
								Télécharger
							</span>
						</li>

<div className="modal fade" id="myModal">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header justify-content-around">
	  <button onClick={download} className="btn btn-success" data-bs-dismiss="modal">Télécharger</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Fermer</button>
      </div>

      <div className="modal-body">
      </div>

      <div className="modal-footer">
        {/* <a href={`canvas.${toDataURL()}`} className="btn btn-success" download>Download</a> */}
       
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
				
			</nav>
		</header>
	);
}
export default Mainnav;
