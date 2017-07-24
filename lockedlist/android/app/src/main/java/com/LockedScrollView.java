package com.poc.scroller.locable.lockablescrollerpoc;

import android.view.View;
import android.view.ViewGroup;
import android.widget.ScrollView;
import android.content.Context;
import android.util.AttributeSet;

public class LockedScrollView extends ScrollView {

    public LockedScrollView(Context context, AttributeSet attrs) {
        super(context, attrs);
        super.setFillViewport(true);
    }

    private void addOnLayoutChangeListener()
    {
        this.getChildAt(0).addOnLayoutChangeListener(new View.OnLayoutChangeListener() {
            @Override
            public void onLayoutChange(View v, int left, int top, int right, int bottom, int oldLeft, int oldTop, int oldRight, int oldBottom) {
                boolean isScrollViewLocked = true;
                boolean isItemAboveCurrentPosition = true;

                if (isScrollViewLocked && isItemAboveCurrentPosition)
                    v.scrollTo(0, v.getScrollY() + (bottom - oldBottom));
            }
        });
    }

    @Override
    public void addView(View child) {
        super.addView(child);

        addOnLayoutChangeListener();
    }

    @Override
    public void addView(View child, int index) {
        super.addView(child, index);

        addOnLayoutChangeListener();
    }

    @Override
    public void addView(View child, ViewGroup.LayoutParams params) {
        super.addView(child, params);

        addOnLayoutChangeListener();
    }

    @Override
    public void addView(View child, int index, ViewGroup.LayoutParams params) {
        super.addView(child, index, params);

        addOnLayoutChangeListener();
    }

}
