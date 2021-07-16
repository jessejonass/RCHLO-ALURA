export function BreadcrumbItem({ link, label }: any) {
  return (
      <li className="breadcrumbs__item">
          { link ?
              <>
                  <a className="breadcrumbs__link" href={link}>{label}</a>
                  <span className="breadcrumbs__item  breadcrumbs__separator">/</span>
              </>
              :
              <span className="breadcrumbs__link">{label}</span>
          }
      </li>
  );
}