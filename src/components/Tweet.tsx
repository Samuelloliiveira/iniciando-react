//definindo uma tipagem
type TweetProps = {
/**
 * text aqui é obrigatório, para ele ser opcional
 * pasta colocar interrogação na frente. text?
 */ 
    text: string 
}

export function Tweet(props: TweetProps) {
    return (
        <p>{props.text}</p>
    )
}