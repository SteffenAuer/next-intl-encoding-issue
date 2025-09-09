import {useTranslations} from 'next-intl';
import {getPathname, Link} from "@/i18n/navigation";

export default function IndexPage() {
  const t = useTranslations('IndexPage');
  return <><h1>{t('title')}</h1>
    <p>
    <Link href={{
      pathname: '/test/[param]',
      params: {
        param: 'Foo / Bar %'
      }
    }}>Wrong: {getPathname({
      href: {
      pathname: '/test/[param]',
      params: {
      param: 'Foo / Bar %'
    }
    },
      locale: 'en'
    })}</Link>
    </p>

    <p>
    <Link href={{
      pathname: '/test/[param]',
      params: {
        param: 'Foo%20%2F%20Bar%20%25'
      }
    }}>Encoded: {getPathname({
      href: {
      pathname: '/test/[param]',
      params: {
      param: 'Foo%20%2F%20Bar%20%25'
    }
    },
      locale: 'en'
    })}</Link>
    </p>

    <p>
    <a href={`/en/test/Foo%20%2F%20Bar%20%25`}>Correct: /en/test/Foo%20%2F%20Bar%20%25</a>
    </p>
  </>;
}
