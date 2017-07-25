package com.lockedlist;

import android.view.View;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.views.view.ReactViewGroup;
import com.facebook.react.views.view.ReactViewManager;

/**
 * Created by daniel on 25/07/2017.
 */

public class LockedViewManager extends ReactViewManager {
    protected static final String REACT_CLASS = "RCTLockedView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public void addView(ReactViewGroup parent, View child, int index) {
        super.addView(parent, child, index);

        LockedScrollView.lastTopView = child;
        //LockedScrollView grandParent = (LockedScrollView)parent.getParent();

        //LockedScrollView._shouldScroll = !LockedScrollView._shouldScroll;
    }
}
