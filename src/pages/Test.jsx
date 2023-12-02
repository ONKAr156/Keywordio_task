import React, { useState } from 'react';

const Test = () => {
    const [result, setResult] = useState([
        {
            campaign: "Cosmetics",
            clicks: 712,
            cost: 4272,
            coversations: 8,
            revenue: 16568
        },
        {
            campaign: "Serums",
            clicks: 3961,
            cost: 472,
            coversations: 3,
            revenue: 16568
        },
        {
            campaign: "Facewash",
            clicks: 9462,
            cost: 4272,
            coversations: 41,
            revenue: 16568
        },
        {
            campaign: "Shampoos",
            clicks: 439,
            cost: 4272,
            coversations: 8,
            revenue: 16568
        },
        {
            campaign: "Conditioners",
            clicks: 1680,
            cost: 4272,
            coversations: 8,
            revenue: 16568
        },
        {
            campaign: "Fashwash 2",
            clicks: 4978,
            cost: 4272,
            coversations: 8,
            revenue: 16568
        },
    ])

    const [sortOrder, setSortOrder] = useState({
        column: null,
        ascending: true,
    })

    const handleSort = term => {
        const copy = [...result]

        const isAscending = sortOrder.column === term ? !sortOrder.ascending : true

        copy.sort((pre, next) => {
            if (pre[term] < next[term]) return isAscending ? -1 : 1;
            if (pre[term] > next[term]) return isAscending ? 1 : -1;
            return 0
        })

        setResult(copy);
        setSortOrder({
            column: term,
            ascending: isAscending
        })
    }

    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>
                            <span style={{ cursor: "pointer" }} onClick={e => handleSort('campaign')}>campaign</span>
                        </th>
                        <th>
                            <a style={{ cursor: "pointer" }} onClick={e => handleSort('clicks')}>clicks</a>
                        </th>
                        <th>
                            <a style={{ cursor: "pointer" }} onClick={e => handleSort('cost')}>cost</a>
                        </th>
                        <th>
                            <a style={{ cursor: "pointer" }} onClick={e => handleSort('coversations')}>coversations</a>
                        </th>
                        <th>
                            <a style={{ cursor: "pointer" }} onClick={e => handleSort('revenue')}>revenue</a>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((item, index) => (
                        <tr key={index}>
                            <td>{item.campaign}</td>
                            <td>{item.clicks}</td>
                            <td>{item.cost}</td>
                            <td>{item.coversations}</td>
                            <td>{item.revenue}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Test