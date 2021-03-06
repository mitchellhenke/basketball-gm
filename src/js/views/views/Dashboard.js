import React from 'react';
import bbgmViewReact from '../../util/bbgmViewReact';

const Dashboard = ({leagues}) => {
    bbgmViewReact.title('Dashboard');

    return <div>
        <ul className="dashboard-boxes">
            {leagues.map(l => <li key={l.lid}>
                <a className="btn btn-default league" href={`/l/${l.lid}`} title={`${l.lid}. ${l.name}`}>
                    <b>{l.lid}. {l.name}</b><br />
                    {l.teamRegion} {l.teamName}<br />
                    {l.phaseText}
                </a>
                <a className="close" href={`/delete_league/${l.lid}`}>&times;</a>
            </li>)}
            <li className="dashboard-box-new"><a href="/new_league" className="btn btn-primary league"><h2>Create new<br />league</h2></a></li>
        </ul>
    </div>;
};

Dashboard.propTypes = {
    leagues: React.PropTypes.arrayOf(React.PropTypes.shape({
        lid: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        phaseText: React.PropTypes.string.isRequired,
        teamName: React.PropTypes.string.isRequired,
        teamRegion: React.PropTypes.string.isRequired,
    })).isRequired,
};

export default Dashboard;
