import './DataTable.css'
const DataTable = (props) => {

    const data = props.items  || [];
    if (data.length === 0) return <p>No data available</p>;

    const headers = Object.keys(data[0]);


    return (
        <table className="table">

            <thead >

                <tr >
                    {headers.map((key) => (
                        <th key={key}>
                            {key
                                .replace(/([A-Z])/g, ' $1')         // insere espaço antes das letras maiúsculas
                                .replace(/^./, str => str.toUpperCase())} {/* capitaliza a primeira letra */}
                        </th>
                    ))}
                </tr>

            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {headers.map((key) => (
                            <td key={key}>
                                {key === 'image' ? (
                                    item[key] ? <img src={item[key]} alt="foto" width="50" /> : null
                                ) : (
                                    item[key]
                                )}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DataTable;

