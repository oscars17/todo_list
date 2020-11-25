import getCurrentDate from "@/help_functions/getCurrentDate"

const getRandomInt = (x, y) => {
    x = Math.ceil(x)
    y = Math.floor(y)
    return Math.floor(Math.random() * (y - x)) + x
}

const note_list = () => {
    let result = []
    for (let i = 0; i < 10; i++) {
        let note = {}
        note.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lectus libero, dignissim in leo et, convallis maximus sem. Aliquam odio massa, tincidunt eget elit porttitor, ultricies cursus ipsum. Pellentesque facilisis tempus massa. '
        note.cached_text = null
        note.id = i
        note.todo_list = []
        note.date_created = getCurrentDate()
        const number_of_todos = getRandomInt(1, 10)
        for (let i = 0; i < number_of_todos; i++) {
            let to_do_element = {
                id: i,
                text: 'placeholder'
            }
            to_do_element.id = i
            to_do_element.text = 'placeholder'
            to_do_element.cached_text = null
            to_do_element.cached_checked = null
            to_do_element.checked = false
            to_do_element.date_created = getCurrentDate()
            note.todo_list.push(to_do_element)
        }
        result.push(note)
    }
    return result
}

export default note_list()