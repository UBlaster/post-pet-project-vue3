export default {
    name:'intersection',
    mounted(element, binding) { // element это отслеживаемый елемент вмонтрированный в DOM. binding - объект. Он описывается как значение атрибута v-intersection, 
        // и туда мы можем передавать любые значения(функции в том числе)
        let options = { // скролл 
            rootMargin: "0px",
            threshold: 1.0,
        };
        let callback = (entries) => {
            if (entries[0].isIntersecting)
                binding.value() // тут мы обращаемя как раз к функции
        }
        let observer = new IntersectionObserver(callback, options);
        observer.observe(element); //  отслеживаем наш объект
    },
}