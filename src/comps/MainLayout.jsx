import React from 'react';
import PropTypes from 'prop-types';

/**
 * MainLayout is the top-level layout used across all routes.
 * It accepts three structural UI elements:
 *   - aside: for navigation/sidebar
 *   - toolbar: for top header or controls
 *   - body: for main page content
 *
 * Custom styling should be applied by the developer via external CSS or styled-components.
 *
 * Example:
 * <MainLayout
 *   aside={<Sidebar />}
 *   toolbar={<TopBar />}
 *   body={<Dashboard />}
 * />
*/

function MainLayout({ aside, toolbar, body }) {
  return (
    <div>
      {/* Sidebar */}
      <aside>
        {aside}
      </aside>

      {/* Main Area */}
      <div>
        {/* Top Toolbar */}
        <header>
          {toolbar}
        </header>

        {/* Main Body */}
        <main>
          {body}
        </main>
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  aside: PropTypes.node.isRequired,
  toolbar: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
};

export default MainLayout;
