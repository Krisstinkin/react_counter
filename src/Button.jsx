//название функции Button придумали сами, в дальнейшем Button будем использовать как тэг
//props - это свойство. Внутри своих тэгов (в этом примере Button это тэг) можем передавать любые свойства - любая информация, которую мы хотим передать из родительского компонента в дочерний.
//названия свойств придумываем сами. в нашем примере в App.jsx мы сделали props title и здесь его применили. Если сделать console.log(props), то мы увидим, что они передаются как объект (ключ, значение)
//так как этих свойств может быть много мы передаем их по методу деструктуризации через { title }

function Button(props) {

    const { title, changeCount } = props

    return (
        <button onClick={changeCount} className="mx-10 bg-blue-500 rounded-lg text-xl text-white px-4 py-2 shadow-md font-semibold">{title}</button>
    )
}


export default Button