import React from 'react';
import PropTypes from 'prop-types';

import { addDataAttributes } from '../../_utils';

import Logo from '../../Logo';
import Link from '../../Link';
import { H3, Block, Span } from '../../Typography';
import Grid, { Item } from '../../Grid';

import { COMPONENTS } from '../_constants';
import { StyledLayoutHeader } from '../_style';

export default function LayoutHeader(props) {
  const { title, titleColor, breadcrumbs, breadcrumbsColor, homeRoute, children } = props;

  return (
    <StyledLayoutHeader {...addDataAttributes({ component: COMPONENTS.HEADER })}>
      <Grid justify="spaceBetween" alignItems="center" noWrap>
        <Item grow>
          {!title && (
            <>
              {homeRoute && (
                <Link isRouter href={homeRoute} isBlock>
                  <Logo />
                </Link>
              )}
              {!homeRoute && <Logo />}
            </>
          )}
          {title && <H3 color={titleColor}>{title}</H3>}
          {breadcrumbs && (
            <Block color={breadcrumbsColor}>
              {breadcrumbs.map((item, index) => (
                <Span key={item.id}>
                  {!!index && '  /  '}
                  <Link isSecondary={breadcrumbsColor === 'minor'} isRouter href={item.route}>
                    {item.title}
                  </Link>
                </Span>
              ))}
              {title && (
                <Span>
                  {'  /  '}
                  {title}
                </Span>
              )}
            </Block>
          )}
        </Item>
        <Item>{children}</Item>
      </Grid>
    </StyledLayoutHeader>
  );
}

LayoutHeader.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
  breadcrumbsColor: PropTypes.string,
  homeRoute: PropTypes.string,
  children: PropTypes.node,
};

LayoutHeader.defaultProps = {
  title: null,
  breadcrumbs: null,
  titleColor: 'primary',
  breadcrumbsColor: 'minor',
  homeRoute: null,
  children: null,
};
