import React from "react"

export default function Spinner() {
    return (
        <div className="mx-auto mt-24">
            {/*<!-- Component: Square horizontal sm sized spinner  --> */}
            <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-live="polite"
                aria-busy="true"
            >
                <path
                    d="M7 10H3V14H7V10Z"
                    className="animate animate-bounce fill-emerald-500 "
                />
                <path
                    d="M14 10H10V14H14V10Z"
                    className="animate animate-bounce fill-emerald-500 [animation-delay:.2s]"
                />
                <path
                    d="M21 10H17V14H21V10Z"
                    className="animate animate-bounce fill-emerald-500 [animation-delay:.4s]"
                />
            </svg>
            {/*<!-- End Square horizontal sm sized spinner  --> */}
        </div>
    )
}
