interface IIconRedirect {
    url: string;
    icon: React.ReactNode;
}

function IconRedirect({ url, icon }: IIconRedirect) {
  return (
    <a href={url} target="_blank">
        {icon}
    </a>
  )
}

export default IconRedirect