// function loadGreeting() {
//     const xhr = new XMLHttpRequest()

//     xhr.addEventListener('load', () => {
//         let response = xhr.response
//         console.log(response)
//     })

//     xhr.open('GET', 'https://supersimplebackend.dev/greeting')
//     xhr.send()

//     // console.log(xhr)
// }

// function loadGreeting() {
//     fetch('https://supersimplebackend.dev/greeting')
//         .then((response) => response.text())
//         .then((info) => console.log(info))
// }

// async function loadGreeting() {
//     try {
//         const response = await fetch('https://amazon.com')
//         const info = await response.text()
//         console.log(info)
//     } catch (error) {
//         console.error(`CORS error - ${error}`)
//     }
// }

// loadGreeting()

// async function postGreeting() {
//     try {
//         const response = await fetch(
//             'https://supersimplebackend.dev/greeting',
//             {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     name: 'Yehor',
//                 }),
//             },
//         )

//         if (response.status >= 400) throw response

//         const greeting = await response.text()

//         console.log(greeting)
//     } catch (error) {
//         if (error.status === 400) {
//             const err = await error.text()

//             console.error(`${err}`)
//         } else {
//             console.error('Network error. Please try again later.')
//         }
//     }
// }

// postGreeting()
