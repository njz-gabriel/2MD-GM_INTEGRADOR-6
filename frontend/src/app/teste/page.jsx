export default async function Teste() {
    const res = await fetch('http://localhost:3000/api/auth/perfil');
    const data = await res.json();

    console.log(data);


    if (data) return <>
        {
            JSON.stringify(data)
        }
    </>
    else return <> SEM DATA </>
}