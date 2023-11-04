export default (determinant) => {
    const body = document.body

    unref(determinant) ? body.style.overflowY = 'hidden' : body.style.overflowY = 'initial'
}