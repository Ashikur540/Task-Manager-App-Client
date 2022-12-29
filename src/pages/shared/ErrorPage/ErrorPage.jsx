import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex justify-center items-center">
            <div id="error-page" className="max-h-52 text-center  mt-12">
                <h1 className="text-warning font-bold my-8 text-6xl">Oops!😓</h1>
                <p className="text-error font-medium text-2xl">Sorry, an unexpected error has occurred.</p>
                <p className="text-red-500 font-medium text-2xl">
                    <b>{error.statusText || error.message}</b>
                </p>
                <Link to='/'><button className="btn btn-secondary" >go to home</button></Link>
            </div>
        </div>
    );
}