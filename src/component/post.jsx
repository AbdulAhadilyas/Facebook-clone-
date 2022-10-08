import './css/post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment, faShare } from '@fortawesome/free-solid-svg-icons'


const Post = () => {
    return (
        <>
            <div className="post-clone">
                <div className="post-top-flex">
                    <div className="profile">
                        <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGgcAigAYkZCTUQwYTAwMGE2YjAxMDAwMGI4MDEwMDAwMGEwMjAwMDAzYjAyMDAwMDc4MDIwMDAwZTYwMjAwMDAzMTAzMDAwMDYyMDMwMDAwOTUwMzAwMDBjYzAzMDAwMDNjMDQwMDAwAP/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/CABEIACgAKAMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAABgIFBwT/xAAXAQEBAQEAAAAAAAAAAAAAAAACAQAD/9oADAMBAAIQAxAAAAHynePq0xjv81HnAtcQ9VpSTNZy7PPxEpwqunCKND5//8QAHhAAAQUAAgMAAAAAAAAAAAAAAwECBAUQABESEyL/2gAIAQEAAQUC4mLoRuI4sLpZEYoUypVgRwlYKssJKmDkBvtCDpz7mGGPDyvd4LG+jXZEIzn/xAAaEQACAwEBAAAAAAAAAAAAAAABAgAQEQMx/9oACAEDAQE/AZo3KwnydlBYNSxq/8QAGhEAAgIDAAAAAAAAAAAAAAAAAREAEAMhQf/aAAgBAgEBPwERadMdmMlKjBX/xAAoEAACAQIDBgcAAAAAAAAAAAABAhEAAxAhQQQSEyIyYSAjMVGxwfD/2gAIAQEABj8C8QVBJoW7RD3h1gH0qbixjxCPNYQg+6cvnuNkNZ/TR5YGOocAx3p9kKLwQAwOtE2t6ctcdm7k0T7cvzXUcmYRh//EACIQAQABBAEDBQAAAAAAAAAAAAERABAhQVExYYEgkaGx8f/aAAgBAQABPyH1aY3wBTlucg48VIQLm5Wh4XE36p4pAEDyZ60FXMEZ73LMyNHT9rB8TdSmGfeoKEsGW7+QH4KiAaS7SihDFC6sNv/aAAwDAQACAAMAAAAQ7C8vj8ih8//EABoRAAEFAQAAAAAAAAAAAAAAAAEAEBExUSH/2gAIAQMBAT8QKimPWkbRgjAGuqt//8QAGxEBAAICAwAAAAAAAAAAAAAAAQAQETEhUWH/2gAIAQIBAT8QjJwHFAeIBF7a1m9f/8QAHxABAQACAQUBAQAAAAAAAAAAAREAITEQQVFhgXHR/9oACAEBAAE/EMGTDOqAJAaq8Ysl09K8fMQfdwnSo3s3zx1CjBXlGxN3h2XAoR8oB1HguYjlv9uTR3e+OoUERGqUKsANIH7ksIMpuNXIR774U0VpFge2+rmNfeH+GChoU+Avwp8MssC+wHb729P/2Q==" alt="" />
                        <div className='profile-name-center'>
                            <p className='profile-name'>Anas Jawed</p>
                            <small>19h</small>
                        </div>
                    </div>
                    <div className="post-round-circle">
                        <svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="x1lliihq x1k90msu x2h7rmj x1qfuztq xcza8v6 x1qx5ct2 xw4jnvo"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                    </div>
                </div>
                <div className="post-img">
                    <img src="https://scontent.fkhi2-3.fna.fbcdn.net/v/t39.30808-6/310281605_1235456683973952_5652322539676850861_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VogqI6EMvIAAX_KR9zv&_nc_ht=scontent.fkhi2-3.fna&oh=00_AT8fDayObskBskdvL10cskiuNS-_e-yB-4XFs0GMhiSa0A&oe=6345E0A9" alt="" />
                </div>
                <div className="post-footer">
                    <div className='post-footer-border'>
                        <div className="footer-flex-1">
                            <div className="footer-like-icon">
                                <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" alt="" style={{ width: 18 }} />
                                <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" alt="" style={{ width: 18 }} />
                            </div>

                            <div className='footer-like-name '>
                                <div className='like-name padding'>
                                    Inoxent Zain Zain and 636 others
                                </div>
                                <div className='footer-comment padding'>
                                    159 comments
                                </div>
                                <div className='share padding'>
                                    <span>1</span>
                                    share
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='footer-line'></div>
                    <div className="footer-icon-flex">
                    <div className="footer-icon">
                        <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" ></i>
                        <span className='footer-icon-cap'>Like</span>
                    </div>
                    <div className="footer-icon">
                        <i data-visualcompletion="css-img" class="x1b0d4991 x1d69dk1" ></i>
                        <span className='footer-icon-cap'>Comment</span>
                    </div>
                    <div className="footer-icon">
                        <i data-visualcompletion="css-img" class="x1b0d4992 x1d69dk1" ></i>
                        <span className='footer-icon-cap'>Share</span>
                    </div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Post;