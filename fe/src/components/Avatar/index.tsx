import './index.less'

export default function index({imgUrl,alt}) {
    return  <div className='avatar_container'>
                 {imgUrl && <img alt={alt} src={imgUrl}></img>}
            </div>
  }