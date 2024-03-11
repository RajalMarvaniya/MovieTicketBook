// TheaterList.js
import React from 'react';
import TheaterTableRow from './TheaterTableRow';

function TheaterList({ theaters }) {
    return (
        <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <table style={{ borderCollapse: 'collapse', marginTop: '20px', width: '100%', maxWidth: '800px', border: '1px solid #ccc', boxShadow: '0px 0px 5px #ccc', textAlign: 'left' }}>
                <thead>
                    <tr>
                        <th>Theater Id</th>
                        <th>Theater Name</th>
                        <th>Location</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {theaters.map(theater => (
                        <TheaterTableRow key={theater.id} theater={theater} />
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default TheaterList;
