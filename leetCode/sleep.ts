async function sleep(millis: number) {
    return await new Promise((resolve) => setTimeout(resolve, millis))
}

sleep(2000).then(result => console.log(`${result} Stop`))
